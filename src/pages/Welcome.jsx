import splashImage from "../assets/images/splash-image.png";

export default function Welcome() {
    return (
        <>
            <h4 className="text-3xl font-bold underline">Savory & Sweet</h4>
            <img src={splashImage} alt="splash image" />
        </>
    );
}