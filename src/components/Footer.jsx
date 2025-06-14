const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-10">
            <div className="wrapper flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>
                    © {new Date().getFullYear()} MovieNest — Built by Harsh Singh
                </p>
                <div className="flex gap-4">
                    <a href="https://github.com/HarshSSingh267" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-singh-267s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        LinkedIn
                    </a>
                    <a href="mailto:harshssingh267@gmail.com" className="hover:text-white transition">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
