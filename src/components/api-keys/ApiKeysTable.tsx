import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import Link from "next/link"
import { Button } from "@/components/ui/button"
const apiKeys = [
  {
    name: "mobile-app",
    rate: "100/min",
    requests: 5400,
    status: "Active",
  },
]

export default function ApiKeysTable() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h3 className="mb-4 text-lg font-semibold">API Keys</h3>
      <Link href="/dashboard/api-keys/create">
  <Button>Create API Key</Button>
</Link>

      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Rate Limit</TableHead>
            <TableHead>Requests Today</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiKeys.map((key) => (
            <TableRow key={key.name}>
              <TableCell>{key.name}</TableCell>
              <TableCell>{key.rate}</TableCell>
              <TableCell>{key.requests}</TableCell>
              <TableCell>{key.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </div>
  )
}