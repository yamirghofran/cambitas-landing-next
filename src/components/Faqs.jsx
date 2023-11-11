import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is Cambitas?',
      answer:
        'Cambitas is an innovative platform aimed at reducing waste in the construction industry by facilitating the sale, donation, or exchange of leftover materials, fostering sustainability and cost-effectiveness.',
    },
    {
      question: 'How does Cambitas help in reducing construction waste?',
      answer:
        'By enabling companies to list and transact unused materials, Cambitas reduces landfill waste and helps companies recover costs, promoting a greener economy in the construction sector.',
    },
    {
      question: 'Who can use Cambitas?',
      answer:
        'Our platform is designed for construction industry professionals such as contractors, builders, developers, and suppliers seeking efficient material management.',
    },
  ],
  [
    {
      question: 'Is there a subscription fee or commission?',
      answer:
        'Cambitas operates on a subscription model with competitive fees, complemented by minimal commissions, ensuring cost-effectiveness for our users.',
    },
    {
      question: 'How do I list my materials on Cambitas?',
      answer:
        'Simply sign up and use our intuitive interface to upload your materials details. Our AI assists in categorization and pricing for ease and accuracy.',
    },
    {
      question: 'How does the private catalog feature work?',
      answer:
        'The private catalog allows for internal inventory management within your company, enabling resource tracking, trading, and optimization privately and securely.',
    },
  ],
  [
    {
      question: 'What makes Cambitas different from other marketplaces?',
      answer:
        'Cambitas is tailored for the construction industry, emphasizing sustainability with advanced AI, low fees, and a dedicated approach to waste reduction.',
    },
    {
      question: 'Is Cambitas environmentally friendly?',
      answer:
        'Yes, Cambitas is committed to reducing the environmental impact of construction by facilitating the reuse and recycling of materials.',
    },
    {
      question: 'How secure are transactions on Cambitas?',
      answer:
        'We ensure transaction security with encryption and a robust platform designed to protect user data and confidentiality.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
