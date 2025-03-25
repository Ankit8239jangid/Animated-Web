
import { motion, } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'




const services = [
  { name: 'Web Design', description: 'Creating stunning, responsive websites that captivate your audience.' },
  { name: 'UX/UI Design', description: 'Crafting intuitive user experiences that delight and engage.' },
  { name: 'Brand Identity', description: 'Developing unique brand identities that set you apart from the competition.' },
  { name: 'Digital Marketing', description: 'Implementing strategies to boost your online presence and reach.' },
]

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Team Members', value: '25' },
]

export default function AboutPage() {
  return (
    <div className=" relative min-h-screen">



      <main>
        <section id="about" className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl">
              We are Perfect 😉
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl">
              Crafting digital experiences that leave a lasting impression
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-20"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-3 max-w-3xl text-lg">
                  At Thirtysixstudio, we're on a mission to revolutionize the digital landscape. We believe in the power of
                  innovative design to transform businesses and captivate audiences. Our team of passionate creatives and
                  tech enthusiasts work tirelessly to bring your vision to life.
                </p>
                <div className="mt-10 space-y-4">
                  {['User-Centric Design', 'Cutting-Edge Technology', 'Seamless Experiences'].map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-center"
                      whileHover={{ scale: 1.05, originX: 0 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <p className="ml-3 text-base">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg shadow-lg"
                  src="https://cdn.dribbble.com/userupload/12052945/file/original-d69aecb883757065752b55e8e7ad2b95.png?crop=0x0-1600x1200&resize=400x300&vertical=center"
                  alt="Our modern workspace"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl">
                Tailored solutions to elevate your digital presence
              </p>
            </motion.div>
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className=" rounded-lg shadow-lg p-6 h-full flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-medium">{service.name}</h3>
                        <p className="mt-2 text-base">{service.description}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 "
                      >
                        Learn more
                        <ArrowRight className="ml-2 -mr-0.5 h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl">
              Numbers that speak for themselves
            </p>
          </motion.div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=" rounded-lg shadow-lg p-6 text-center"
              >
                <dt className="text-base font-medium">{stat.label}</dt>
                <motion.dd
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 + index * 0.1 }}
                  className="mt-2 text-3xl font-semibold"
                >
                  {stat.value}
                </motion.dd>
              </motion.div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  )
}