export default function Offers() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">Coupons & Offers</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="border-dashed border-2 border-indigo-400 p-6 rounded-xl bg-indigo-50">
                    <p className="font-bold text-xl">FLAT50</p>
                    <p>Get Flat ₹50 off on first recharge</p>
                </div>
                <div className="border-dashed border-2 border-green-400 p-6 rounded-xl bg-green-50">
                    <p className="font-bold text-xl">CASHBACK10</p>
                    <p>10% Cashback on Bill Payment</p>
                </div>
            </div>
        </div>
    )
}