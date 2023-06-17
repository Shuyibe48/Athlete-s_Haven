import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/Forms/CheckOutForms";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Getway_Key}`);

const Payment = () => {
    return (
        <div className="container mx-auto">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;