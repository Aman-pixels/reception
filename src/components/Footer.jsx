import Section from './Section';

const Footer = () => {
    return (
        <Section className="bg-ivory py-16 border-t border-gold/10">
            <div className="max-w-4xl mx-auto text-center px-4">
                <p className="font-script text-4xl text-gold-dark mb-4">
                   With Lovingly Regards
                </p>
                <p className="font-serif text-taupe uppercase tracking-widest text-lg mb-8">
                   Saini Family & Friends
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-10 opacity-40">
                   <div className="h-[1px] w-12 bg-taupe" />
                   <div className="w-2 h-2 rounded-full bg-gold" />
                   <div className="h-[1px] w-12 bg-taupe" />
                </div>
                
                <p className="text-xs text-taupe/40 font-sans tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} • Designed with Love
                </p>
            </div>
        </Section>
    );
};

export default Footer;
