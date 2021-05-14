import {
	mkdir, readdir, readFile, unlink, writeFile,
} from "fs/promises";
import toc from "markdown-toc";

const renderContent = async () => {
	const destination = "./projects/site/src/rendered-content";

	mkdir(destination, { recursive: true });
	const preexisting = await readdir(destination);
	await Promise.all(preexisting.map(async (file) => {
		await unlink(`${destination}/${file}`);
	}));

	const source = "./content";
	const order = [
		"title",
		"intro",
		"installation",
		"basic-usage",
		"full-configuration",
		"examples",
		"semantics",
		"alternatives",
		"license-and-contributing",
		"about-this-site",
	];

	const content = order.map((stem) => readFile(`${source}/${stem}.md`));

	const combined = (await Promise.all(content)).join("\n\n");
	let formatted = combined.replace(/\\/gm, "\\\\");

	formatted = formatted
		.replace("# 🌗 Tailwind CSS Theme Variants", "# Introducing: Theme Variants for Tailwind CSS")
		.replace("# ⬇️", "# ")
		.replace("# 🛠", "# ")
		.replace("# ⚙️", "# ")
		.replace("# 📄", "# ");

	formatted = formatted.replace(/^⚠️ (.+)$/gm, "<WatchOut>\n\n$1\n\n</WatchOut>");
	formatted = formatted.replace(/^💡 (.+)$/gm, "<Idea>\n\n$1\n\n</Idea>");
	formatted = formatted.replace(/✅/gm, "<Feature type='yes' />");
	formatted = formatted.replace(/🟡/gm, "<Feature type='kinda' />");
	formatted = formatted.replace(/❌/gm, "<Feature type='no' />");
	formatted = `
<script>
	import WatchOut from "$lib/WatchOut.svelte";
	import Idea from "$lib/Idea.svelte";

	import Feature from "$lib/Feature.svelte";
</script>


${formatted}`;

	writeFile(`${destination}/site-all.svx`, formatted);
	writeFile(`${destination}/site-toc.svx`, toc(formatted).content);
};

const renderReadme = async () => {
	const contentOrder = [
		"title",
		"intro",
		"installation",
		"basic-usage",
		"full-configuration",
		"examples",
		"semantics",
		"alternatives",
		"license-and-contributing",
	];

	const content = contentOrder.map((stem) => readFile(`./content/${stem}.md`));

	const combined = (await Promise.all(content)).join("\n\n");

	writeFile("./README.md", combined);
};

renderContent();
renderReadme();
