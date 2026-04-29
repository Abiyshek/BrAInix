import React from 'react';
import {
  Brain, Zap, FlaskConical, BarChart2, Award, Users,
  Bot, Cloud, TrendingUp, Code2, Cpu, Network, Database
} from 'lucide-react';

export const features = [
  { icon:<Brain size={22}/>, cls:"ic-cyan", title:"Adaptive AI Curriculum", text:"Our neural engine maps your knowledge graph in real time, surfacing exactly what you need to learn next — no wasted effort." },
  { icon:<Zap size={22}/>, cls:"ic-violet", title:"Live Mentor Sessions", text:"Connect with industry practitioners for live 1-on-1 or cohort-based sessions. Real feedback, real breakthroughs." },
  { icon:<FlaskConical size={22}/>, cls:"ic-gold", title:"Immersive 3D Labs", text:"Hands-on practice in interactive 3D environments — from data science sandboxes to virtual engineering labs." },
  { icon:<BarChart2 size={22}/>, cls:"ic-cyan", title:"Progress Intelligence", text:"Detailed analytics on your learning velocity, retention rates, and skill mastery — visualized beautifully, acted on instantly." },
  { icon:<Award size={22}/>, cls:"ic-violet", title:"Verified Credentials", text:"Industry-recognized certificates anchored to blockchain — fraud-proof, globally verifiable, and career-defining." },
  { icon:<Users size={22}/>, cls:"ic-gold", title:"Peer Learning Networks", text:"Collaborative spaces where learners co-build projects, share insights, and accelerate each other's growth." },
];

export const courses = [
  { icon:<Bot size={52} color="#00E5FF" strokeWidth={1.2}/>, thumb:"t-cyan", badge:"Most Popular", tags:[{l:"AI & ML"},{l:"Beginner"}], name:"AI/ML Fundamentals", desc:"Master machine learning algorithms, neural networks, and AI concepts from scratch.", price:"₹1000", meta:"40 hrs · 15 projects", priceColor:"var(--cyan)" },
  { icon:<Code2 size={52} color="#A78BFA" strokeWidth={1.2}/>, thumb:"t-violet", badge:"Trending", tags:[{l:"Python",cls:"v"},{l:"Beginner",cls:"v"}], name:"Python Essentials", desc:"Learn Python programming fundamentals, data structures, and best practices.", price:"₹1000", meta:"35 hrs · 12 projects", priceColor:"var(--violet2)" },
  { icon:<Cloud size={52} color="#F59E0B" strokeWidth={1.2}/>, thumb:"t-gold", badge:"New", tags:[{l:"FullStack",cls:"g"},{l:"Intermediate",cls:"g"}], name:"Python FullStack Web Dev", desc:"Build complete web applications with Python, databases, and frontend frameworks.", price:"₹1000", meta:"56 hrs · 20 projects", priceColor:"var(--gold)" },
  { icon:<Cpu size={52} color="#00E5FF" strokeWidth={1.2}/>, thumb:"t-cyan", badge:"Popular", tags:[{l:"Java",cls:""},{l:"Intermediate"}], name:"Core Java Programming", desc:"Advanced Java concepts, OOP principles, and enterprise-level development.", price:"₹1000", meta:"48 hrs · 18 projects", priceColor:"var(--cyan)" },
  { icon:<Network size={52} color="#A78BFA" strokeWidth={1.2}/>, thumb:"t-violet", badge:"Trending", tags:[{l:"MERN",cls:"v"},{l:"Advanced",cls:"v"}], name:"MERN Stack Development", desc:"Build scalable applications with MongoDB, Express, React, and Node.js.", price:"₹1000", meta:"60 hrs · 25 projects", priceColor:"var(--violet2)" },
  { icon:<TrendingUp size={52} color="#F59E0B" strokeWidth={1.2}/>, thumb:"t-gold", badge:"New", tags:[{l:"IoT",cls:"g"},{l:"Advanced",cls:"g"}], name:"IoT & Embedded Systems", desc:"Create connected devices, sensors, and real-time data processing systems.", price:"₹1000", meta:"50 hrs · 16 projects", priceColor:"var(--gold)" },
  { icon:<Database size={52} color="#00E5FF" strokeWidth={1.2}/>, thumb:"t-cyan", badge:"Essential", tags:[{l:"DSA",cls:""},{l:"Intermediate"}], name:"Data Structures & Algorithms", desc:"Master DSA concepts for coding interviews and optimal problem-solving.", price:"₹1000", meta:"45 hrs · 20 projects", priceColor:"var(--cyan)" },
];

export const steps = [
  { icon:<Brain size={16}/>, title:"Discover Your Path", text:"Take our 5-min skill assessment. Our AI builds a personalized roadmap tailored to your goals." },
  { icon:<Cloud size={16}/>, title:"Learn Through Doing", text:"Interactive labs, real projects, and live mentor feedback — not just videos and quizzes." },
  { icon:<Award size={16}/>, title:"Track & Adapt", text:"Weekly AI-driven progress reports surface exactly where to focus next, keeping you sharp." },
  { icon:<Users size={16}/>, title:"Earn & Launch", text:"Graduate with a verified certificate and connections to our 500+ hiring partner network." },
];

export const testimonials = [
  { av:"AK", cls:"av-c", quote:"BrAInix's adaptive system felt like having a personal tutor that understood how my brain works. I landed my dream ML role in 4 months.", name:"Aisha Khan", role:"ML Engineer at Stripe" },
  { av:"MR", cls:"av-v", quote:"I'd tried every other platform. BrAInix was the only one where I didn't give up. The live mentor sessions changed everything.", name:"Marcus Rivera", role:"Cloud Architect at AWS" },
  { av:"SL", cls:"av-g", quote:"The 3D labs made abstract concepts click instantly. I could run experiments and see results — that's how engineering should be taught.", name:"Sophie Liu", role:"Data Scientist at DeepMind" },
];

export const stats = [
  {num: "52", label: "Active Learners"},
  {num: "95%", label: "Completion Rate"},
  {num: "7", label: "Expert Courses"},
  {num: "4.9★", label: "Avg. Rating"}
];

export const footerLinks = ["Privacy","Terms"];
