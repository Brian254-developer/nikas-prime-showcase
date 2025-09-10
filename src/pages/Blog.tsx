import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Luxury Real Estate Trends for 2024 in Kenya",
      excerpt: "Discover the latest trends shaping the Kenyan luxury real estate market, from smart home technology to sustainable luxury features that modern buyers demand.",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      category: "Market Insights",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: "2",
      title: "Investment Guide: Why Kenyan Luxury Real Estate Remains Strong",
      excerpt: "An in-depth analysis of luxury real estate as an investment vehicle in Kenya, including market performance data and future projections for high-end properties.",
      author: "David Chen",
      date: "December 10, 2024",
      category: "Investment",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: "3",
      title: "Karen vs. Westlands: A Luxury Buyer's Comparison",
      excerpt: "Compare two of Nairobi's most prestigious real estate markets. Learn about pricing trends, lifestyle differences, and investment potential in these prime locations.",
      author: "Monicah Githinji",
      date: "December 5, 2024",
      category: "Market Insights",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: "4",
      title: "The Complete Guide to Buying Your First Luxury Home",
      excerpt: "Everything you need to know about purchasing luxury real estate, from financing options to working with specialized agents and closing processes.",
      author: "Sarah Mitchell",
      date: "November 28, 2024",
      category: "Buying Guide",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: "5",
      title: "Smart Home Features That Add Value to Luxury Properties",
      excerpt: "Explore the latest smart home technologies that today's luxury buyers expect, and how they impact property values and marketability.",
      author: "David Chen",
      date: "November 20, 2024",
      category: "Technology",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
    },
    {
      id: "6",
      title: "Selling Your Luxury Property: Maximizing Your Return",
      excerpt: "Expert strategies for selling high-end real estate, including staging tips, pricing strategies, and marketing approaches that work.",
      author: "Monicah Githinji",
      date: "November 15, 2024",
      category: "Selling Guide",
      readTime: "9 min read",
      image: "/api/placeholder/600/400",
    },
  ];

  const categories = ["all", "Market Insights", "Investment", "Buying Guide", "Selling Guide", "Technology"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Real Estate Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Stay informed with the latest trends, market insights, and expert advice 
            from the luxury real estate world. Your guide to making informed decisions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 animate-slide-up">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16 animate-slide-up">
            <div className="luxury-gradient rounded-xl overflow-hidden card-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-accent rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">Featured Article Image</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{filteredPosts[0].category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{filteredPosts[0].author}</div>
                        <div className="text-sm text-muted-foreground">{filteredPosts[0].readTime}</div>
                      </div>
                    </div>
                    <Button variant="luxury">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article 
              key={post.id}
              className="luxury-gradient rounded-xl overflow-hidden card-shadow property-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Article Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{post.category}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{post.author}</div>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                    </div>
                  </div>
                  <Button variant="outline-luxury" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 animate-slide-up">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No Articles Found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria to find more articles
            </p>
            <Button 
              variant="luxury" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 animate-slide-up">
          <div className="luxury-gradient p-8 rounded-xl card-shadow text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest luxury real estate insights, 
              market trends, and exclusive property alerts delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button variant="luxury">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;