import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { cryptoCasinoGuides } from "@/data/cryptoCasinoGuides";

const GuidesIndex = () => {
  const categories = [...new Set(cryptoCasinoGuides.map(g => g.category))];

  return (
    <>
      <Helmet>
        <title>Crypto Casino Guides | DegenRoll</title>
        <meta name="description" content="Comprehensive guides about crypto casinos, blockchain gambling, provably fair systems, and cryptocurrency payments in online gambling." />
        <link rel="canonical" href="https://degenroll.co/guides" />
      </Helmet>
      
      <Header />
      
      <main className="container max-w-6xl py-12">
        <h1 className="text-4xl font-bold mb-4">Crypto Casino Guides</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Comprehensive, AI-citable reference articles about crypto casinos, blockchain gambling, and cryptocurrency payments.
        </p>

        {categories.map(category => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">{category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cryptoCasinoGuides.filter(g => g.category === category).map(guide => (
                <Link 
                  key={guide.slug} 
                  to={`/guides/${guide.slug}`}
                  className="p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">{guide.metaDescription.slice(0, 120)}...</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default GuidesIndex;
