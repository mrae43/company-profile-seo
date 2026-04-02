/**
 * ServiceCard
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {React.ReactNode} props.icon
 * @param {string} props.link
 */
export default function ServiceCard({ title, description, icon, link }) {
  return (
    <article className="group relative bg-surface-container-lowest p-10 flex flex-col items-start transition-all duration-200 hover:bg-surface-container-low cursor-pointer h-full">
      {/* Ghost Border Fallback */}
      <div className="absolute inset-0 border border-outline-variant opacity-15 pointer-events-none transition-opacity group-hover:opacity-0" />
      
      <div className="mb-10 text-primary">
        {icon}
      </div>
      
      <h3 className="text-2xl font-display font-bold text-on-surface mb-4">
        {title}
      </h3>
      
      <p className="text-body-md text-on-surface-variant font-sans flex-grow">
        {description}
      </p>

      {link && (
        <a href={link} className="mt-10 text-primary font-sans font-medium hover:text-primary-container transition-colors inline-flex items-center">
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </article>
  );
}
