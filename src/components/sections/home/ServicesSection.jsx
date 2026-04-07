import SectionTitle from '../../ui/SectionTitle'
import ServiceCard from '../../ui/ServiceCard'
import { services } from '../../../data/services'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Layanan" title="Layanan Kami" subtitle="Solusi lengkap untuk kebutuhan event, entertainment, IT, dan trading Anda" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <ServiceCard key={s.route} {...s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
