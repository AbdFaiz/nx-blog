import * as motion from "motion/react-client";
import { featuredPosts } from "@/lib/data";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";

const Featured = () => {
  const posts = featuredPosts;
  return (
    <section className="py-20 px-4  s,:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Featured Section
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated thoughts and discoveries from the intersection of
            technology, design, and human experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href="#">
                <Card className="group cursor-pointer p-0 overflow-hidden hover:shadow-xl transition-all duration-300 bg-card/50 hover:border hover:border-primary backdrop-blur-xs md:min-h-130">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-xs">
                            {post.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 me-2" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Read More
                      <ArrowUpRight className="ms-1 h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
