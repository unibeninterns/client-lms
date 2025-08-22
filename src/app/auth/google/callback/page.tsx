import { Suspense } from 'react'
import GoogleCallback from './GoogleCallback'
import { Loader2 } from 'lucide-react'

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <GoogleCallback />
    </Suspense>
  )
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-100">
            <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Loading...
          </h1>
          <p className="text-sm text-gray-600">
            Please wait while we process your request...
          </p>
        </div>
      </div>
    </div>
  )
}