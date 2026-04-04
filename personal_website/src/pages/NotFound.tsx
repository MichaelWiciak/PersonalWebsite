import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] w-full max-w-container mx-auto px-4 md:px-8 py-12 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-[600px] mx-auto p-8 md:p-12 bg-surface-elevated rounded-xl shadow-card">
        <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-base md:text-lg text-text-muted mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent-hover transition-colors duration-300"
          >
            <FiHome className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text-primary font-medium rounded-lg hover:bg-surface-elevated transition-colors duration-300"
          >
            <FiArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
