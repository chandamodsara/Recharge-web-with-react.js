export default function Recharge() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">Quick Recharge</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <input placeholder="Mobile Number" className="w-full border p-3 rounded-lg" />
                <select className="w-full border p-3 rounded-lg"><option>Jio</option><option>Airtel</option></select>
                <input placeholder="Amount" type="number" className="w-full border p-3 rounded-lg" />
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">Pay Now</button>
            </div>
        </div>
    )
}