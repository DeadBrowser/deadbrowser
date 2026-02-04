export default function WhitePage() {
    return (
        <div className="container mx-auto p-10 bg-white text-black min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Top 5 Philanthropists of 2026</h1>
            <p className="mb-4 text-gray-600">
                Philanthropy is evolving. In 2026, we see a shift towards direct-impact giving...
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>1. The Green Earth Initiative</li>
                <li>2. Ocean Cleanup Corp</li>
                <li>3. Digital Literacy Fund</li>
                <li>4. Global Health Watch</li>
                <li>5. Education for All</li>
            </ul>
            <p className="mt-8 text-sm text-gray-400">
                © 2026 Charity Insights Blog. All rights reserved.
            </p>
        </div>
    );
}
