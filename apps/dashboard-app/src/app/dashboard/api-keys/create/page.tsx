"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function CreateApiKeyPage() {

  const [keyName, setKeyName] = useState("")
  const [rateLimit, setRateLimit] = useState(100)
  const [generatedKey, setGeneratedKey] = useState<string | null>(null)

  const generateKey = () => {

    const random = crypto.randomUUID().replace(/-/g, "")
    const key = `sk_live_${random}`

    setGeneratedKey(key)
  }

  return (
    <div className="max-w-xl space-y-6">

      <h1 className="text-2xl font-bold">
        Create API Key
      </h1>

      <Card className="p-6 bg-slate-900 border-slate-800 space-y-4">

        <div>
          <label className="text-sm text-slate-400">
            Key Name
          </label>

          <Input
            value={keyName}
            onChange={(e) => setKeyName(e.target.value)}
            placeholder="mobile-app"
          />
        </div>

        <div>
          <label className="text-sm text-slate-400">
            Rate Limit (requests/min)
          </label>

          <Input
            type="number"
            value={rateLimit}
            onChange={(e) => setRateLimit(Number(e.target.value))}
          />
        </div>

        <Button onClick={generateKey}>
          Generate API Key
        </Button>

      </Card>

      {generatedKey && (

        <Card className="p-6 bg-slate-900 border-slate-800">

          <p className="text-sm text-yellow-400 mb-2">
            Copy your API key now. You won't be able to see it again.
          </p>

          <div className="flex items-center gap-4">

            <code className="bg-black px-3 py-2 rounded">
              {generatedKey}
            </code>

            <Button
              onClick={() => navigator.clipboard.writeText(generatedKey)}
            >
              Copy
            </Button>

          </div>

        </Card>

      )}

    </div>
  )
}