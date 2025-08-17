const INFO = {
	main: {
		title: "Vishwajeet Hogale",
		name: "Vishwajeet Hogale",
		email: "hogale.v@northeastern.edu",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/vishwajeet-hogale",
		linkedin: "https://www.linkedin.com/in/vishwajeet-hogale-72a565198/",
		instagram: "https://www.instagram.com/vishwajeet.hogale/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		resume:"https://drive.google.com/file/d/1GV7gxPdMFTC82-DubnazRXUnQScWMbQZ/view?usp=sharing"
	},

	homepage: {
	title: "AI Researcher | Vision-Language Models | Medical & Scientific AI | Autonomous Driving",
	description: `I’m Vishwajeet Hogale, pursuing my Master’s in Artificial Intelligence at Northeastern University with a focus on Computer Vision. My strong skillsets lie in multimodal deep learning, natural language processing, and machine learning systems engineering. I’ve applied these to domains like autonomous driving, enterprise automation, and financial intelligence—building models that fuse vision, text, time-series, and graph data for real-world impact. I’m deeply interested in advancing AI to make technology more reliable, accessible, and impactful across fields such as autonomous systems, healthcare, and beyond.`,
	},

	about: {
		title: "I’m Vishwajeet Hogale. I live in Boston, where I am doing my Master of Scince in Artificial Intelligence.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
	{
		title: "MedCaption: Deep Learning Framework for Automated Medical Image Captioning",
		description:
			"Built a medical image captioning model using DeiT + BERT + LSTM after experimenting with CLIP, ResNet + LSTM, ResNet + LLaMA, and DeIT + LLaMA, improving caption quality and medical relevance. Developed a custom data preprocessing pipeline leveraging transformer-based embeddings, leading to a 15% increase in BLEU score for image caption relevance.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/MedCaptions",
	},

	{
		title: "Beyond RAG: Contextual Concept Expansion for Smarter Chatbot Search",
		description:
			"Developed a query expansion system for a chatbot to retrieve ranked research information from the university website, improving research discovery. Implemented a Contextual Concept Expansion - Hybrid Approach using scraped data and transformer models (BERT, RoBERTa) to enhance query understanding, increasing retrieval relevance by 20% NDCG Score.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/RAG-based-Search-Engine",
	},

	{
		title: "Video Captioning for Lab Procedures using CLIP-GPT2 and CLIP-T5",
		description:
			"Designed and trained a dual-model architecture leveraging CLIP visual features and transformer-based language models (GPT2 and T5) to generate accurate video captions for medical and laboratory procedures. Compared training and inference performance, visualized frame embeddings, and evaluated results using BLEU, ROUGE, and METEOR metrics.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/video-commentary-ai",
	},

	{
		title: "Theia - An Image to Speech Application for the Blind",
		description:
			"Led a team to develop a mobile app for the visually impaired, leveraging a PyTorch CNN-LSTM model for image decoding and a Python Flask backend to convert images into detailed speech in real-time. Built a user-friendly Flutter-based mobile UI for real-time image capture and video streaming.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/theia",
	},

	{
		title: "Music Reconstruction using Genetic Algorithm",
		description:
			"Implemented a genetic algorithm for music generation using MIDI file channels as genes, applying crossover and mutation to evolve compositions across multiple generations. Developed a fitness evaluation system to optimize musical coherence in the final outputs.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/Music-Reconstruction",
	},

	{
		title: "Event Photo Manager with Face Recognition",
		description:
			"Created an event photo management system leveraging ResNet-152 and OpenCV for face recognition and extraction, enabling users to efficiently retrieve and download images featuring specific individuals from a large collection of event photos.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/vishwajeet-hogale/ImageRec",
	},
]

};

export default INFO;
