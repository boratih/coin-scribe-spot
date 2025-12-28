import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { getSlugFromArticleId } from "@/lib/slugs";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const ArticleCard = ({ id, title, excerpt, category, date, image, readTime }: ArticleCardProps) => {
  const slug = getSlugFromArticleId(id);
  
  return (
    <Link to={`/${slug}`}>
      <Card className="group h-full overflow-hidden bg-gradient-card border-border/50 hover-glow cursor-pointer">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <Badge 
            className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0"
          >
            {category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{excerpt}</p>
          <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;