import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <Link to="/">
            <Button variant="hero">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="container py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 mb-4">
            {article.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
          </div>

          <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            {(() => {
              const lines = article.content.split('\n');
              const elements: JSX.Element[] = [];
              let i = 0;

              while (i < lines.length) {
                const paragraph = lines[i];

                // Handle tables
                if (paragraph.trim().startsWith('|')) {
                  const tableLines: string[] = [];
                  while (i < lines.length && lines[i].trim().startsWith('|')) {
                    tableLines.push(lines[i]);
                    i++;
                  }

                  if (tableLines.length > 2) {
                    const headers = tableLines[0].split('|').map(h => h.trim()).filter(h => h);
                    const rows = tableLines.slice(2).map(row => 
                      row.split('|').map(cell => cell.trim()).filter(cell => cell)
                    );

                    elements.push(
                      <div key={elements.length} className="my-8 rounded-lg border border-border/40 overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-primary/10 hover:bg-primary/10">
                              {headers.map((header, idx) => (
                                <TableHead key={idx} className="font-bold text-foreground">
                                  {header}
                                </TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {rows.map((row, rowIdx) => (
                              <TableRow key={rowIdx} className="hover:bg-muted/50">
                                {row.map((cell, cellIdx) => (
                                  <TableCell key={cellIdx} className="text-muted-foreground">
                                    {cell}
                                  </TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    );
                  }
                  continue;
                }

                // Handle headings
                if (paragraph.startsWith('# ')) {
                  elements.push(<h1 key={elements.length} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>);
                } else if (paragraph.startsWith('## ')) {
                  elements.push(<h2 key={elements.length} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>);
                } else if (paragraph.startsWith('### ')) {
                  elements.push(<h3 key={elements.length} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>);
                } else if (paragraph.trim().startsWith('-')) {
                  elements.push(<li key={elements.length} className="ml-6">{paragraph.slice(1).trim()}</li>);
                } else if (paragraph.trim()) {
                  elements.push(<p key={elements.length} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>);
                }

                i++;
              }

              return elements;
            })()}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="container py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard
                key={relatedArticle.id}
                id={relatedArticle.id}
                title={relatedArticle.title}
                excerpt={relatedArticle.excerpt}
                category={relatedArticle.category}
                date={relatedArticle.date}
                image={relatedArticle.image}
                readTime={relatedArticle.readTime}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;
