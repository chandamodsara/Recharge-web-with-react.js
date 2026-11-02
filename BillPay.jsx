export default function BillPay() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">Pay Your Bills</h2>
            <div className="grid grid-cols-2 gap-4">
                {["Electricity", "Gas", "Water", "Broadband"].map(bill =>
                    <div key={bill} className="bg-white p-6 rounded-xl shadow text-center font-semibold cursor-pointer hover:shadow-lg">{bill} Bill</div>
                )}
            </div>
        </div>
    )
}