export let projects = [
	{
		title: 'JobOps',
		description:
			'Local-first job search operations tracker for applications, resumes, reminders, and notes.',
		hook: 'A local-first operations tracker for job search workflows.',
		problem:
			'Keeps applications, resume versions, follow-ups, and saved job details in one structured workspace.',
		techStack: ['Expo', 'React Native', 'TypeScript', 'SQLite', 'Jest'],
		built:
			'Built a mobile workflow app with application status tracking, resume version management, follow-up reminders, local notes, and backup import/export.',
		value:
			'Shows practical business-systems thinking: structured data, repeatable workflows, local ownership, and useful dashboard summaries without requiring a backend.',
		tags: ['Workflow Systems', 'Local-First', 'Automation', 'Dashboard', 'Mobile App'],
		image: 'images/jobops-dashboard.svg',
		githubUrl: 'https://github.com/neezzzy/JobOps'
	},
	{
		title: 'AI Meeting Intelligence Tool',
		description:
			'Frontend meeting transcript analyzer that extracts structured summaries and follow-up items.',
		hook: 'A transcript-to-actions tool for meeting follow-through.',
		problem:
			'Turns raw meeting notes into a clearer set of summaries, action items, decisions, risks, and follow-up questions.',
		techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Rule-Based Parsing'],
		built:
			'Built a browser-only meeting analysis interface with sample transcript loading, deterministic text extraction, structured result sections, and markdown export.',
		value:
			'Demonstrates an AI-workflow product shape while keeping the MVP transparent, fast to run, and free of API keys or cloud dependencies.',
		tags: ['AI Workflow', 'Rule-Based MVP', 'Productivity', 'Markdown Export', 'Frontend Tool'],
		image: 'images/ai-meeting-intelligence-tool.png',
		githubUrl: 'https://github.com/neezzzy/ai-meeting-tool'
	},
	{
		title: 'ParkWise BC',
		description: 'Rule-based parking sign interpreter for common BC parking wording.',
		hook: 'A civic-tech helper for reading parking sign wording.',
		problem:
			'Helps drivers interpret common parking sign text without guessing at compact or confusing rule wording.',
		techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Rule Engine'],
		built:
			'Built a frontend tool that accepts parking sign text, applies deterministic parsing rules, and returns plain-English guidance, restrictions, warnings, and uncertainty notes.',
		value:
			'Turns a small local pain point into a practical dashboard-style interface while clearly avoiding legal advice or unsupported automation claims.',
		tags: ['Civic Tech', 'Rule-Based Tool', 'Local Utility', 'Plain-English UI', 'Frontend App'],
		image: 'images/parkwise-bc-results.png',
		githubUrl: 'https://github.com/neezzzy/ParkRight-BC'
	},
	{
		title: 'Definitive Jiu Jitsu',
		description: 'Real-world WordPress site setup for a Brazilian jiu-jitsu academy.',
		hook: 'A live WordPress site for a local martial arts business.',
		problem:
			'Helped create a clear web presence where visitors can learn about the academy and find key information quickly.',
		techStack: ['WordPress', 'CMS Setup', 'Responsive Site', 'Content Organization'],
		built:
			'Set up and launched the WordPress site structure, pages, content flow, and public-facing presentation for real users.',
		value:
			'Shows practical real-world delivery: working with an existing CMS, organizing business content, and launching a site outside a purely portfolio/demo context.',
		tags: ['Real-World Project', 'WordPress', 'CMS', 'Business Website', 'Client Experience'],
		image: 'images/definitive-bjj.webp',
		demoUrl: 'https://definitivebjj.ca/'
	},
	{
		title: 'BrainyCanuck',
		description: 'Mobile flashcard app for Canadian citizenship test preparation.',
		hook: 'A focused study companion for Canadian citizenship prep.',
		problem:
			'Breaks citizenship test preparation into shorter review sessions that are easier to repeat.',
		techStack: ['React Native', 'JavaScript', 'Mobile UI'],
		built:
			'Built a flashcard-based mobile study app with organized review content and simple navigation for quick practice.',
		value:
			'Applies practical education design to a real learner need, with a lightweight format that is useful without being overcomplicated.',
		tags: ['Education', 'Mobile App', 'Flashcards', 'Study Tool', 'Learning Design'],
		image: 'images/brainyCanuck.webp',
		demoUrl: 'https://play.google.com/store/apps/details?id=com.neezzyy.flashcards'
	},
	{
		title: 'Crypto Dashboard',
		description: 'Dashboard concept for scanning cryptocurrency market information.',
		hook: 'A chart-focused dashboard for market scanning.',
		problem:
			'Organizes changing crypto data into a more readable interface for quick visual review.',
		techStack: ['JavaScript', 'Charts', 'Dashboard UI'],
		built:
			'Built a dashboard layout with chart-focused components, visual summaries, and a cleaner structure for browsing market information.',
		value:
			'Shows early dashboard and data-presentation practice in a practical format, without overstating the project as a trading or analytics platform.',
		tags: ['Dashboard', 'Charts', 'Data UI', 'Market Data', 'Frontend Practice'],
		image: 'images/crypto-dashboard.webp',
		githubUrl: 'https://github.com/neezzzy/crypto-board'
	},
	{
		title: 'Microlearning: Windows Server Fundamentals',
		description: 'Interactive microlearning module for Windows Server fundamentals.',
		hook: 'A short technical learning module for Windows Server basics.',
		problem: 'Guides learners through Windows Server concepts in a structured, bite-sized format.',
		techStack: ['Articulate 360', 'GitHub Pages', 'Instructional Design'],
		built:
			'Created and published an interactive microlearning experience with guided screens, learner-friendly pacing, and static web hosting.',
		value:
			'Connects technical education with web delivery, making an older learning project clear, accessible, and still useful as a portfolio example.',
		tags: [
			'Education',
			'Microlearning',
			'Technical Training',
			'GitHub Pages',
			'Instructional Design'
		],
		image: 'images/windows-server-fundamentals.webp',
		demoUrl: 'https://neezzzy.github.io/micro-learning-windows-server-fundamentals/#/'
	}
];
