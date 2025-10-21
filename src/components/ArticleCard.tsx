import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

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
  return (
    <Link to={`/article/${id}`}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50 cursor-pointer">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{readTime}</span>
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;
