import os
import sys

# --- Configuration ---
# The directory to scan. '.' means the current directory where the script is run.
PROJECT_DIRECTORY = '.'

# File extensions to check
FILE_EXTENSIONS = ('.js', '.jsx', '.ts', 'tsx')

# Keywords that typically require a component to be a Client Component.
# We add '=' to event handlers to avoid matching them in plain text/comments.
INTERACTIVE_KEYWORDS = [
    'useState', 
    'useEffect', 
    'useContext', 
    'useReducer', 
    'useRef', 
    'useLayoutEffect',
    'useMemo',
    'useCallback',
    'onClick={', 
    'onChange={', 
    'onSubmit={'
]
# ---------------------

def scan_file(file_path):
    """
    Scans a single file to see if it uses interactive keywords but lacks 'use client'.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if 'use client' is already present
        if "'use client'" in content or '"use client"' in content:
            return None # Already a client component, no action needed

        # If not, check for interactive keywords
        for keyword in INTERACTIVE_KEYWORDS:
            if keyword in content:
                return file_path # Found a potential candidate

    except Exception as e:
        print(f"Could not read file {file_path}: {e}")
        
    return None

def main():
    """
    Main function to walk through the directory and scan files.
    """
    print("--- Next.js 'use client' Diagnostic Script ---")
    print(f"Scanning directory: {os.path.abspath(PROJECT_DIRECTORY)}\n")
    
    candidate_files = []
    
    # Exclude node_modules and .next directories from the scan
    exclude_dirs = set(['node_modules', '.next', 'dist'])

    for root, dirs, files in os.walk(PROJECT_DIRECTORY, topdown=True):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if file.endswith(FILE_EXTENSIONS):
                file_path = os.path.join(root, file)
                result = scan_file(file_path)
                if result:
                    candidate_files.append(result)

    if not candidate_files:
        print("✅ All files with interactive keywords seem to have the 'use client' directive.")
        print("If the error persists, check for components passed as props from Server to Client components.")
    else:
        print("🚨 Found potential Client Components missing the 'use client' directive:")
        print("Please review the following files and add `'use client';` to the very top if they handle user interaction or state:\n")
        for file in candidate_files:
            # Make path relative for cleaner output
            relative_path = os.path.relpath(file, PROJECT_DIRECTORY)
            print(f"  - {relative_path}")
            
    print("\n--- Scan Complete ---")

if __name__ == '__main__':
    main()