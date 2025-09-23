import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fabVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const actions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Pozovi",
      href: "tel:+381601234567",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:info@porucisajt.rs",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Chat",
      href: "/kontakt",
      color: "bg-purple-500 hover:bg-purple-600",
      isLink: true
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3"
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Action Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col space-y-3 mb-3"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {actions.map((action, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    {action.isLink ? (
                      <Button
                        asChild
                        size="sm"
                        className={`${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 px-4`}
                      >
                        <Link to={action.href} onClick={() => setIsOpen(false)}>
                          {action.icon}
                          <span className="text-sm font-medium">{action.label}</span>
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="sm"
                        className={`${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 px-4`}
                      >
                        <a href={action.href}>
                          {action.icon}
                          <span className="text-sm font-medium">{action.label}</span>
                        </a>
                      </Button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
              </motion.div>
            </Button>
          </motion.div>

          {/* Pulsing Effect for Attention */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.75, 0.5, 0.75]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};