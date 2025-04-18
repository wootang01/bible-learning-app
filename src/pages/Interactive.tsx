import React, { useState } from 'react'

const Interactive: React.FC = () => {
  const [selectedPassage, setSelectedPassage] = useState('john3')
  const [soapNotes, setSoapNotes] = useState({
    scripture: '',
    observation: '',
    application: '',
    prayer: ''
  })
  const [aiHelp, setAiHelp] = useState({
    observation: '',
    application: '',
    prayer: ''
  })
  const [showScaffold, setShowScaffold] = useState(false)

  const passages = {
    john3: {
      title: 'John 3:16-17',
      text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.',
      scaffolds: {
        observation: [
          'Who are the main characters or people mentioned?',
          'What actions are described?',
          'What words are repeated or emphasized?',
          'What contrasts do you see? (e.g., perish vs. eternal life)'
        ],
        application: [
          'How does this change how I think about God?',
          'Is there a promise I can hold onto?',
          'How should this affect my relationships with others?',
          'Is there an action I should take based on this passage?'
        ],
        prayer: [
          'Thank God for what this passage reveals about Him',
          'Ask for help to apply this truth in your life',
          'Pray for someone else who needs to hear this message'
        ]
      }
    },
    proverbs3: {
      title: 'Proverbs 3:5-6',
      text: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
      scaffolds: {
        observation: [
          'What are the commands in this passage?',
          'What promise is given?',
          'What contrasts do you see?',
          'What do these verses say about our understanding versus God\'s?'
        ],
        application: [
          'In what areas of my life am I "leaning on my own understanding"?',
          'How can I better trust God with my whole heart?',
          'What does it mean to submit to God in "all my ways"?',
          'How can I apply this to a decision I\'m currently facing?'
        ],
        prayer: [
          'Confess areas where you struggle to trust God',
          'Ask for help to submit to Him in specific situations',
          'Thank God for His guidance in your life'
        ]
      }
    }
  }

  const simulateAIHelp = (section: string) => {
    // In a real app, this would call an actual AI API
    // For now, we'll just simulate AI responses
    
    if (selectedPassage === 'john3') {
      if (section === 'observation') {
        setAiHelp(prev => ({
          ...prev,
          observation: "I notice this passage talks about God's love for the world, leading to the gift of his Son. There's a contrast between perishing and eternal life. It also clarifies God's purpose wasn't to condemn but to save through Jesus."
        }))
      } else if (section === 'application') {
        setAiHelp(prev => ({
          ...prev,
          application: "This passage reminds us that God's love is for everyone, which could inspire how we treat others. It also emphasizes that God's primary purpose is salvation, not judgment. How might this change how you view God or approach your relationships with others?"
        }))
      } else if (section === 'prayer') {
        setAiHelp(prev => ({
          ...prev,
          prayer: "You might thank God for His love and for sending Jesus. You could ask for help to fully embrace the gift of eternal life and to share this message of love with others in your school or community."
        }))
      }
    } else if (selectedPassage === 'proverbs3') {
      if (section === 'observation') {
        setAiHelp(prev => ({
          ...prev,
          observation: "This passage contains commands to trust God fully and not rely on our own understanding. It also instructs us to submit to God in everything we do. The promise is that God will direct our paths. There's a contrast between our understanding and God's guidance."
        }))
      } else if (section === 'application') {
        setAiHelp(prev => ({
          ...prev,
          application: "Think about decisions you're facing as a student - perhaps about friendships, studies, or future plans. This passage encourages us to seek God's guidance rather than relying only on our own thinking. What specific situation could you practice this in?"
        }))
      } else if (section === 'prayer') {
        setAiHelp(prev => ({
          ...prev,
          prayer: "Consider praying about specific areas where you find it hard to trust God. You might ask for wisdom in a particular decision, and thank God for His promise to guide you when you submit to Him."
        }))
      }
    }
  }

  const handleChangePassage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPassage(e.target.value)
    setSoapNotes({
      scripture: '',
      observation: '',
      application: '',
      prayer: ''
    })
    setAiHelp({
      observation: '',
      application: '',
      prayer: ''
    })
  }

  const handleInputChange = (section: string, value: string) => {
    setSoapNotes(prev => ({
      ...prev,
      [section]: value
    }))
  }

  const currentPassage = passages[selectedPassage as keyof typeof passages]

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Interactive SOAP Bible Study</h2>
        <p className="mb-6">
          Now it's your turn to try the SOAP method. Select a passage below and work through each step.
          Use the scaffolding questions if you need help, and click the "AI Suggestion" button if you want some ideas.
        </p>
        
        <div className="mb-6">
          <label htmlFor="passage-select" className="block text-sm font-medium mb-2">
            Choose a passage:
          </label>
          <select
            id="passage-select"
            value={selectedPassage}
            onChange={handleChangePassage}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="john3">John 3:16-17</option>
            <option value="proverbs3">Proverbs 3:5-6</option>
          </select>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="font-bold text-lg mb-2">{currentPassage.title}</h3>
          <p className="text-xl italic">{currentPassage.text}</p>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
          <button 
            className="mx-4 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setShowScaffold(!showScaffold)}
          >
            {showScaffold ? "Hide Scaffolding" : "Show Scaffolding Questions"}
          </button>
          <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>
        
        <div className="space-y-8">
          {/* Scripture Section - Just the passage reference */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-400">S - Scripture</h3>
            <p className="mb-4">
              The scripture passage is {currentPassage.title}. You can refer to it above.
            </p>
          </div>
          
          {/* Observation Section */}
          <div className="border border-green-200 dark:border-green-900 rounded-lg p-6 bg-green-50 dark:bg-green-900/20">
            <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400">O - Observation</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.observation.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.observation}
              onChange={(e) => handleInputChange('observation', e.target.value)}
              placeholder="What do you observe in this passage? What stands out to you?"
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.observation && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.observation}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('observation')}
              className="mt-4 px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-md hover:bg-green-200 dark:hover:bg-green-700"
            >
              Get AI Help with Observation
            </button>
          </div>
          
          {/* Application Section */}
          <div className="border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-900/20">
            <h3 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-400">A - Application</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.application.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.application}
              onChange={(e) => handleInputChange('application', e.target.value)}
              placeholder="How can you apply this passage to your life as a student?"
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.application && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.application}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('application')}
              className="mt-4 px-4 py-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-md hover:bg-yellow-200 dark:hover:bg-yellow-700"
            >
              Get AI Help with Application
            </button>
          </div>
          
          {/* Prayer Section */}
          <div className="border border-red-200 dark:border-red-900 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
            <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-400">P - Prayer</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.prayer.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.prayer}
              onChange={(e) => handleInputChange('prayer', e.target.value)}
              placeholder="Write a prayer based on this passage..."
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.prayer && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.prayer}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('prayer')}
              className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 rounded-md hover:bg-red-200 dark:hover:bg-red-700"
            >
              Get AI Help with Prayer
            </button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-bold mb-2">Reflection:</h3>
          <p>
            After completing your SOAP study, take a moment to reflect on the process. 
            What did you find most helpful? Which parts were challenging? 
            How could you use this method in your regular Bible reading?
          </p>
        </div>
      </section>
    </div>
  )
}

export default Interactive 