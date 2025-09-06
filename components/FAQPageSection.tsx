'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface Question {
  id: number
  question: string
  answer: string
  isOpen: boolean
}

interface FAQPageSectionProps {
  id: string
  title: string
  description: string
  questions: Question[]
}

const FAQPageSection = ({ id, title, description, questions }: FAQPageSectionProps) => {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(
    new Set(questions.filter(q => q.isOpen).map(q => q.id))
  )

  const toggleQuestion = (questionId: number) => {
    const newOpenQuestions = new Set(openQuestions)
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId)
    } else {
      newOpenQuestions.add(questionId)
    }
    setOpenQuestions(newOpenQuestions)
  }

  return (
    <section id={id} className="scroll-mt-32">
      {/* Section Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 max-w-3xl">{description}</p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleQuestion(question.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-medium text-gray-900 pr-4">
                {index + 1}. {question.question}
              </span>
              <div className="flex-shrink-0">
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    openQuestions.has(question.id) ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                openQuestions.has(question.id)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{question.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQPageSection
