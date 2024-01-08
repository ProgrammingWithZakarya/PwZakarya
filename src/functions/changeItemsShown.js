import PortfolioImage from "@assets/images/work_5_md.jpg";

export default function changeItemsShown(category = "*") {
	const tags = ["personal", "company", "production", "template", "store", "panel-admin"];
	let newData = [];

	// Filter data based on category
	if (category === "*") {
		newData = data;
	} else if (!tags.includes(category)) {
		throw new Error("Invalid category.");
	} else {
		newData = data.filter(item => item.shortDesc.includes(category));
	}

	return newData;
}
export const data = [
	{
		id: 1,
		title: "Shoe Rebranding",
		shortDesc: ["personal"],
		img: PortfolioImage,
		href: "portfolio-single-1.html",
		classes: " web branding",
	},
	{
		id: 2,
		title: "Reworking",
		shortDesc: ["personal"],
		img: PortfolioImage,
		href: "portfolio-single-3.html",
		classes: " branding packaging illustration",
	},
	{
		id: 3,
		title: "landing",
		shortDesc: ["branding ", "packaging"],
		img: PortfolioImage,
		href: "portfolio-single-4.html",
		classes: " branding packaging",
	},
	{
		id: 4,
		title: "Watch",
		shortDesc: ["company"],
		img: PortfolioImage,
		href: "images/work_4_full.jpg",
		classes: " web packaging",
	},
	{
		id: 5,
		title: "Shoe Rebranding",
		shortDesc: ["production"],
		img: PortfolioImage,
		href: "images/work_5_md.jpg",
		classes: " illustration packaging",
	},
	{
		id: 6,
		title: "Reshape",
		shortDesc: ["template"],
		img: PortfolioImage,
		href: "portfolio-single-2.html",
		classes: " web branding",
	},
	{
		id: 7,
		title: "Modern Building",
		shortDesc: ["store"],
		img: PortfolioImage,
		href: "images/work_7_a_md.jpg",
		classes: "branding packaging",
	},
	{
		id: 8,
		title: "",
		shortDesc: ["production"],
		img: PortfolioImage,
		href: "",
		classes: "web branding",
	},
	{
		id: 9,
		title: "Render Packaging",
		shortDesc: ["personal"],
		img: PortfolioImage,
		href: "images/work_9_a_md.jpg",
		classes: "web illustration",
	},
];
