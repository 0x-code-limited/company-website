type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 text-sm">{description}</p>
    </div>
  );
}
