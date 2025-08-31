import { useState, useEffect } from 'react';
import { ChevronRight, Star, ShoppingBag, Heart, Zap, Sparkles } from 'lucide-react';

// Sample shoe data
const featuredShoes = [
  {
    id: 1,
    name: "StrideX Quantum",
    price: 12999,
    originalPrice: 15999,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    colors: ["#FF00FF", "#00FFFF", "#FFFF00"],
    isNew: true,
    tag: "Limited Edition"
  },
  {
    id: 2,
    name: "Neon Pulse Pro",
    price: 9999,
    originalPrice: 11999,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 89,
    colors: ["#FF1493", "#1E90FF", "#32CD32"],
    isHot: true,
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Cyber Runner Elite",
    price: 14999,
    originalPrice: 17999,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 203,
    colors: ["#8A2BE2", "#FF4500", "#00CED1"],
    isNew: true,
    tag: "Just Dropped"
  },
  {
    id: 4,
    name: "Future Step X1",
    price: 8999,
    originalPrice: 10999,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    colors: ["#FF69B4", "#00BFFF", "#FFD700"],
    tag: "Trending"
  },
  {
    id: 5,
    name: "Glow Walker Max",
    price: 11999,
    originalPrice: 13999,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 92,
    colors: ["#DC143C", "#00FF7F", "#FF1493"],
    isHot: true,
    tag: "Staff Pick"
  },
  {
    id: 6,
    name: "Volt Runner Pro",
    price: 13999,
    originalPrice: 16999,
    image: "/placeholder.svg",
    rating: 5.0,
    reviews: 74,
    colors: ["#9932CC", "#FF6347", "#40E0D0"],
    isNew: true,
    tag: "New Drop"
  }
];

const ShoeCard = ({ shoe }: { shoe: typeof featuredShoes[0] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="group relative bg-dark-surface/50 glass rounded-2xl p-6 hover-lift glow-neon-pink border border-dark-border/50 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          shoe.isNew ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
          shoe.isHot ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30' :
          'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
        }`}>
          {shoe.tag}
        </span>
      </div>

      {/* Like Button */}
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-bg/50 backdrop-blur-sm border border-dark-border/50 hover:bg-neon-pink/20 transition-all duration-300"
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-neon-pink text-neon-pink' : 'text-foreground/70'}`} />
      </button>

      {/* Shoe Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="aspect-square bg-gradient-to-br from-neon-pink/10 via-neon-purple/5 to-neon-blue/10 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
          <img 
            src={shoe.image} 
            alt={shoe.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Floating Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <div className="p-3 rounded-full bg-neon-pink/20 backdrop-blur-sm animate-float">
                <Zap className="w-6 h-6 text-neon-pink" />
              </div>
              <div className="p-3 rounded-full bg-neon-blue/20 backdrop-blur-sm animate-float" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-6 h-6 text-neon-blue" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button className="btn-neon text-sm">
            Quick View
          </button>
        </div>
      </div>

      {/* Color Options */}
      <div className="flex space-x-2 mb-4">
        {shoe.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(index)}
            className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
              selectedColor === index ? 'border-neon-pink scale-110' : 'border-dark-border/50 hover:border-neon-blue/50'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Shoe Info */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-neon-pink transition-colors duration-300">
          {shoe.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(shoe.rating) ? 'text-neon-blue fill-neon-blue' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {shoe.rating} ({shoe.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-neon-pink">
            ₹{shoe.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{shoe.originalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-semibold text-neon-cyan">
            {Math.round((1 - shoe.price / shoe.originalPrice) * 100)}% OFF
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-gradient-to-r from-neon-pink to-neon-blue text-dark-bg font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 flex items-center justify-center space-x-2 group">
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default function Index() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-dark-bg" />
            </div>
            <span className="text-2xl font-bold text-glow text-neon-pink">StrideX</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-neon-pink transition-colors duration-300">New Drops</a>
            <a href="#" className="text-foreground hover:text-neon-blue transition-colors duration-300">Men</a>
            <a href="#" className="text-foreground hover:text-neon-purple transition-colors duration-300">Women</a>
            <a href="#" className="text-foreground hover:text-neon-cyan transition-colors duration-300">Collections</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-dark-surface transition-colors duration-300">
              <Heart className="w-6 h-6 text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-dark-surface transition-colors duration-300 relative">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-pink rounded-full text-xs font-semibold text-dark-bg flex items-center justify-center">3</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-hero-text">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="block text-foreground">Step</span>
              <span className="block bg-neon-gradient bg-clip-text text-transparent text-glow animate-glow-pulse">Bold.</span>
              <span className="block text-foreground">Step</span>
              <span className="block bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent text-glow animate-glow-pulse" style={{ animationDelay: '0.5s' }}>Future.</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Experience the next generation of footwear technology.
            <br />
            Where style meets innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <button className="btn-neon text-lg px-10 py-4">
              Shop New Drops
            </button>
            <button className="px-10 py-4 rounded-xl font-semibold text-foreground border-2 border-neon-blue/50 hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300">
              Watch Story
            </button>
          </div>

          {/* Live Counter */}
          <div className="mt-12 glass rounded-2xl p-6 inline-block animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <div className="text-sm text-muted-foreground mb-2">Next Drop In</div>
            <div className="text-2xl font-bold text-neon-pink">
              {String(Math.floor(Math.random() * 24)).padStart(2, '0')}:
              {String(currentTime.getMinutes()).padStart(2, '0')}:
              {String(currentTime.getSeconds()).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-neon-pink rotate-90" />
        </div>
      </section>

      {/* Featured Shoes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
              Featured
              <span className="block bg-neon-gradient bg-clip-text text-transparent text-glow">Drops</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collection of futuristic footwear designed for the bold and fearless.
            </p>
          </div>

          {/* Shoes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredShoes.map((shoe, index) => (
              <div 
                key={shoe.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ShoeCard shoe={shoe} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button className="btn-neon text-lg px-12 py-4">
              View All Collections
              <ChevronRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/20 to-neon-blue/20" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Join the
                <span className="block bg-neon-gradient bg-clip-text text-transparent text-glow">Revolution</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Be the first to know about new drops, exclusive releases, and member-only perks.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-xl bg-dark-surface border border-dark-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-pink transition-colors duration-300 w-full sm:w-auto"
                />
                <button className="btn-neon px-8 py-3 w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-dark-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-dark-bg" />
            </div>
            <span className="text-2xl font-bold text-glow text-neon-pink">StrideX</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 StrideX. Step into the future.
          </p>
        </div>
      </footer>
    </div>
  );
}
