import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-green-400/20">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🌍</div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Country Not Found
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We don't have information about this country yet, or the page you're looking for doesn't exist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/work">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Work Opportunities
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    Request Country Info
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
