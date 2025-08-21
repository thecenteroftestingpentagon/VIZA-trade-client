"use client"
import FloatingSocialButtons from '@/components/floating-social-buttons'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <FloatingSocialButtons />
        </>
    )
}
