import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-start"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              Writing That{" "}
              <span className="text-primary italic">Resonates</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Insights on tech, design, and creativity from a digital craftsman
              who believes in the power of thougtful storytelling.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button size="lg" className="group">
                Read the latest Post
                <ArrowUpRight className="h-4 w-4 transition-all duration-200 group-hover:rotate-12" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute w-80 h-80 bg-linear-to-b from-primary/20 to-secondary/20 rounded-full blur-3xl -top-10 -right-10"></div>
              <div className="absolute w-96 h-96 bg-linear-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
