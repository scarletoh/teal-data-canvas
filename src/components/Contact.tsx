
import { Github, Linkedin, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Award, Star, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/theme-provider';

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // We'll use IntersectionObserver to trigger the animation when scrolled into view
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  // Set up observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    });

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'scharbutcher@gmail.com',
      href: 'mailto:scharbutcher@gmail.com',
      description: 'Best for detailed inquiries and project discussions',
      color: 'hover:text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 784 416 439',
      href: 'tel:+254784416439',
      description: 'Quick calls for urgent matters and consultations',
      color: 'hover:text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Professional Network',
      href: 'https://linkedin.com/in/yourusername',
      description: 'Connect for professional opportunities and networking',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Code Portfolio',
      href: 'https://github.com/yourusername',
      description: 'View my projects and technical contributions',
      color: 'hover:text-gray-300'
    }
  ];

  const availability = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EAT', available: true },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EAT', available: true },
    { day: 'Sunday', hours: 'Available for urgent matters', available: false }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#B91C3C]/10 to-[#DC143C]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Centered Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#DC143C]/10 px-3 py-1.5 rounded-full mb-3">
            <MessageCircle className="w-3 h-3 text-[#DC143C]" />
            <span className="text-[#DC143C] font-['Helvetica_Now'] text-xs font-medium">Let's Connect</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Montserrat'] font-black mb-3 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] bg-clip-text text-transparent">
            Let's Chat
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] mx-auto mb-3"></div>
          <p className="text-muted-foreground font-['Inter'] text-sm max-w-xl mx-auto leading-relaxed">
            Ready to transform your data challenges into opportunities? I'm always excited to discuss
            new projects, share insights, or explore collaboration possibilities.
          </p>
        </div>

        {/* Main Contact Layout - Perfectly Centered */}
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                className={`glass-card p-6 hover:scale-105 transition-all duration-300 group border border-border/50 hover:border-[#DC143C]/30`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-6 h-6 text-[#DC143C] ${method.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-foreground mb-1 group-hover:text-[#DC143C] transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-[#DC143C] font-inter font-medium text-sm mb-2">{method.value}</p>
                    <p className="text-muted-foreground font-inter text-xs leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Two Column Layout - Contact Form & Info */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Enhanced Contact Form */}
            <div className="glass-card p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="text-center mb-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Send className="w-8 h-8 text-[#DC143C]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full opacity-60 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                  Send Me a Message
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  I'll respond within 24 hours • Let's discuss your project
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3 font-['Montserrat']">
                      Full Name <span className="text-[#DC143C]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-5 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 focus:border-[#DC143C] transition-all duration-300 shadow-sm hover:shadow-md ${
                          focusedField === 'name' ? 'border-[#DC143C] shadow-lg shadow-[#DC143C]/20 bg-white dark:bg-gray-900' : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="Enter your full name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3 font-['Montserrat']">
                      Email Address <span className="text-[#DC143C]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-5 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 focus:border-[#DC143C] transition-all duration-300 shadow-sm hover:shadow-md ${
                          focusedField === 'email' ? 'border-[#DC143C] shadow-lg shadow-[#DC143C]/20 bg-white dark:bg-gray-900' : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="your.email@example.com"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3 font-['Montserrat']">
                    Project Subject <span className="text-[#DC143C]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      className={`w-full px-5 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 focus:border-[#DC143C] transition-all duration-300 shadow-sm hover:shadow-md ${
                        focusedField === 'subject' ? 'border-[#DC143C] shadow-lg shadow-[#DC143C]/20 bg-white dark:bg-gray-900' : 'border-gray-200 dark:border-gray-700'
                      }`}
                      placeholder="What's this project about?"
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] transition-all duration-300 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3 font-['Montserrat']">
                    Project Details <span className="text-[#DC143C]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={6}
                      className={`w-full px-5 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-2 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 focus:border-[#DC143C] transition-all duration-300 shadow-sm hover:shadow-md resize-none ${
                        focusedField === 'message' ? 'border-[#DC143C] shadow-lg shadow-[#DC143C]/20 bg-white dark:bg-gray-900' : 'border-gray-200 dark:border-gray-700'
                      }`}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    ></textarea>
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-bold rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#DC143C]/40 border border-[#DC143C]/30 overflow-hidden font-['Poppins']"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B91C3C]/80 to-[#A0163C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                      <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                    </span>
                  </button>

                  <p className="text-center text-xs text-muted-foreground mt-4 font-['Inter']">
                    By sending this message, you agree to receive a response within 24 hours
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Information & Availability */}
            <div className="space-y-8">
              {/* Availability */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-['Montserrat']">Availability</h3>
                    <p className="text-muted-foreground text-sm font-['Helvetica_Now']">When I'm typically available</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {availability.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#DC143C]/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${slot.available ? 'bg-green-500' : 'bg-muted'}`}></div>
                        <span className="text-sm text-foreground font-['Inter']">{slot.day}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-['Inter']">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-['Montserrat']">Location</h3>
                    <p className="text-muted-foreground text-sm font-['Helvetica_Now']">Where I'm based</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-foreground font-medium font-['Inter']">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground font-['Inter']">
                    East Africa Time (EAT) - UTC+3
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-['Montserrat']">Response Time</h3>
                    <p className="text-muted-foreground text-sm font-['Helvetica_Now']">How quickly I respond</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-[#DC143C]/10 rounded-lg">
                    <div className="text-2xl font-bold text-[#DC143C] mb-1 font-['Montserrat']">24h</div>
                    <div className="text-xs text-muted-foreground font-['Inter']">Email Response</div>
                  </div>
                  <div className="text-center p-3 bg-[#DC143C]/10 rounded-lg">
                    <div className="text-2xl font-bold text-[#DC143C] mb-1 font-['Montserrat']">2h</div>
                    <div className="text-xs text-muted-foreground font-['Inter']">LinkedIn Messages</div>
                  </div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="glass-card p-6 border-l-4 border-[#DC143C]">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#DC143C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#DC143C] mb-2 font-['Montserrat']">My Philosophy</p>
                    <p className="text-muted-foreground text-sm italic leading-relaxed font-['Inter']">
                      "Data Decoded Dominated" - I believe in not just analyzing data, but mastering it to unlock
                      its full potential for driving business decisions and creating impactful solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Call to Action Card */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative max-w-3xl mx-auto">
              <div className="relative glass-card p-6 md:p-8">
                <div className="relative z-10">
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-3 font-['Montserrat'] leading-tight">
                    <span className="bg-gradient-to-r from-[#DC143C] via-[#B91C3C] to-[#A0163C] bg-clip-text text-transparent">
                      Ready to turn your data challenges into opportunities?
                    </span>
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed font-['Inter'] mb-6 max-w-2xl mx-auto">
                    Whether you need <span className="font-semibold text-[#DC143C]">data analysis</span>,
                    <span className="font-semibold text-[#DC143C]">machine learning solutions</span>, or
                    <span className="font-semibold text-[#DC143C]">strategic insights</span> -
                    I'm here to help turn your data into <span className="font-bold text-[#B91C3C]">actionable results</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href="mailto:scharbutcher@gmail.com"
                      className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#DC143C]/30 text-sm"
                    >
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Send Email</span>
                    </a>

                    <a
                      href="tel:+254784416439"
                      className="group flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Call Me</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available now</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#DC143C]" />
                      <span>Expert consultation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#DC143C]" />
                      <span>Quick response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
