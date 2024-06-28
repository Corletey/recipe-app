import splashImage from "../assets/images/splash-image.png";
// import bgImage from "../assets/images/splash-bg.png";

export default function Welcome() {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/splash-bg.png')] bg-cover h-screen flex flex-col bg-center place-items-center place-content-center">
            <h4 className="text-white text-center text-4xl text-3xl font-bold">Savory & <br/>Sweet</h4>
            <img src={splashImage} alt="splash image" />
        </div>
    );
}