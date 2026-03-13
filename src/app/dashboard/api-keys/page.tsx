import ApiKeysTable from "@/components/api-keys/ApiKeysTable"

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        API Keys
      </h1>

      <ApiKeysTable />

    </div>
  )
}