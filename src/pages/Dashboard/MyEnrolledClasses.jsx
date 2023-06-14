const paymentHistory = [
    {
        id: 1,
        className: 'Class A',
        instructor: 'John Doe',
        amount: 50,
        date: '2023-05-20',
        image: 'https://images.unsplash.com/photo-1610736342603-4b3620157ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        id: 2,
        className: 'Class B',
        instructor: 'Jane Smith',
        amount: 70,
        date: '2023-06-05',
        image: 'https://images.unsplash.com/photo-1544333323-ec9ed3218dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=832&q=80',
    },
];

const MyEnrolledClasses = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-8">My Enrolled Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {paymentHistory.map((payment) => (
                    <div key={payment.id} className="bg-gray-100 p-4 md:p-8">
                        <img src={payment.image} alt="Class" className="w-full h-auto mb-4" />
                        <h2 className="text-xl md:text-2xl font-bold mb-2">{payment.className}</h2>
                        <p className="text-lg">Instructor: {payment.instructor}</p>
                        <p className="text-lg">Amount: ${payment.amount}</p>
                        <p className="text-lg">Payment date: {payment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEnrolledClasses;
