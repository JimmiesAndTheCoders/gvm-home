import gvmLogo from "../assets/gvmlogo.svg";

const ComingSoon = () => {
  return (
    <div className="p-8 bg-base-100 rounded-lg shadow-md">
        <img src={gvmLogo} alt="Grounded Video Maker Logo" className="w-lg h-32 mx-auto mb-6 filter drop-shadow-2xl" />
        <h1 className="text-4xl font-bold text-center">Coming Soon</h1>
        <p className="text-center mt-4">We're working hard to bring you something amazing. Stay tuned!</p>
    </div>
  )
}

export default ComingSoon