const paymentHistory = [
    {
        id: 1,
        className: 'Class A',
        instructor: 'John Doe',
        amount: 50,
        date: '2023-05-20',
    },
    {
        id: 2,
        className: 'Class B',
        instructor: 'Jane Smith',
        amount: 70,
        date: '2023-06-05',
    },
];

const MyPayment = () => {
    return (
        <div className="flex flex-col space-y-8 p-8">
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Class</th>
                        <th className="border p-2">Instructor</th>
                        <th className="border p-2">Amount</th>
                        <th className="border p-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((payment) => (
                        <tr key={payment.id}>
                            <td className="border p-2">{payment.className}</td>
                            <td className="border p-2">{payment.instructor}</td>
                            <td className="border p-2">${payment.amount}</td>
                            <td className="border p-2">{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyPayment;
