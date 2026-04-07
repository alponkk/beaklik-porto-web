import SectionTitle from '../../ui/SectionTitle'
import HoverCard from '../../ui/HoverCard'
import { commitments } from '../../../data/commitments'

export default function CommitmentSection() {
  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <SectionTitle label="Values" title="Our Commitment to Sustainability" subtitle="Nilai-nilai yang menjadi fondasi setiap layanan kami" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {commitments.map((c, i) => (
            <HoverCard key={c.title} icon={c.icon} title={c.title} description={c.description} color={c.color} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
