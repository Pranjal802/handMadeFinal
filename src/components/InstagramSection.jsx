import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';

const INSTAGRAM_POSTS = [
  { emoji: '🐻🌸', bg: 'from-[#D8A7B1] to-[#edc5cc]', likes: '1.2k', label: 'New drop!' },
  { emoji: '🫧💜', bg: 'from-[#9CAF88] to-[#b8c9a8]', likes: '876', label: 'Slime vibes' },
  { emoji: '👜✨', bg: 'from-[#C97C5D] to-[#d99a80]', likes: '2.1k', label: 'Mirror magic' },
  { emoji: '🎁🌷', bg: 'from-[#D4A373] to-[#e0b98a]', likes: '934', label: 'Gift ready!' },
  { emoji: '🧵🎨', bg: 'from-[#D8A7B1] to-[#C97C5D]', likes: '756', label: 'Process reel' },
  { emoji: '🌸💕', bg: 'from-[#9CAF88] to-[#D4A373]', likes: '1.8k', label: 'Spring collection' },
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-[#F5E6DA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera size={20} className="text-[#C97C5D]" />
            <span className="font-sans text-sm font-medium text-[#C97C5D] bg-white px-4 py-1.5 rounded-full shadow-soft">
              @handmadewithlove.in
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3E2C23] mb-4">
            Follow Our <span className="text-gradient italic">Handmade Journey</span> 💕
          </h2>
          <p className="font-sans text-[#5C4033]/70 max-w-xl mx-auto">
            Behind the scenes, new launches, and happy unboxings — join our cozy community!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-soft hover:shadow-hover"
            >
              <div className={`w-full h-full bg-gradient-to-br ${post.bg} flex flex-col items-center justify-center gap-2`}>
                <span className="text-4xl">{post.emoji}</span>
                <span className="font-sans text-[10px] font-medium text-white/80">{post.label}</span>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#3E2C23]/50 flex flex-col items-center justify-center gap-2"
              >
                <Camera size={20} className="text-white" />
                <span className="font-sans text-xs text-white font-medium">❤️ {post.likes}</span>
                <ExternalLink size={14} className="text-white/70" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#D8A7B1] text-[#3E2C23] px-7 py-3.5 rounded-full font-sans font-semibold hover:bg-[#D8A7B1] hover:text-white transition-all shadow-soft hover:shadow-card"
          >
            <Camera size={17} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
