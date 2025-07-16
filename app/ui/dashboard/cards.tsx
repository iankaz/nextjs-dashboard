import { fetchCardData } from '@/app/lib/data';
import clsx from 'clsx';

function Card({ title, value, type }: { title: string; value: string | number; type: string }) {
  return (
    <div className={clsx(
      'rounded-xl bg-white p-4 shadow',
      type === 'collected' && 'border-l-4 border-green-500',
      type === 'pending' && 'border-l-4 border-yellow-500',
      type === 'invoices' && 'border-l-4 border-blue-500',
      type === 'customers' && 'border-l-4 border-purple-500',
    )}>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
