import { memo, useState } from "react";


const data = [
  {
    id: "tab1",
    label: "Overview",
    content: "This is the overview content.",
  },
  {
    id: "tab2",
    label: "Details",
    content: "This is the details content.",
  },
  {
    id: "tab3",
    label: "Settings",
    content: "This is the settings content.",
  },
];


function App() {
  const [tabs, setTabs] = useState(data)
  const [activeTab, setActiveTab] = useState(0);
  const [showNewTabModal, setShowNewTabModal] = useState(false);


  function handleTabChange(tabId) {
    setActiveTab(tabId)
  }

  function handleAddTab(formData) {
    const id = `tab-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const newTab = { ...formData, id };
    setTabs([...tabs, newTab])
    setShowNewTabModal(false)
  }

  return (
    <div>
      {showNewTabModal && <div className="absolute bg-gray-100 h-screen w-screen flex justify-center items-center">
        <NewTabModal onAddTab={handleAddTab} />
      </div>}
      <h1 className="font-semibold text-3xl text-center">Tabs Component</h1>
      <div>
        {tabs.map((tab, tabIndex) => <Tab key={tab.id} activeTab={activeTab} tabIndex={tabIndex} label={tab.label} onChangeTab={handleTabChange} />)}
        <button onClick={() => setShowNewTabModal(true)} className="bg-gray-200 px-2 py-1 m-1 rounded-md cursor-pointer">+</button>
      </div>
      <div className="border-slate-600 border-[0.5px] p-5 w-[600px]">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}


const Tab = memo(function ({ label, onChangeTab, tabIndex, activeTab }) {
  return <button style={tabIndex === activeTab ? { "backgroundColor": "lime" } : undefined} onClick={() => onChangeTab(tabIndex)} className="bg-gray-200 px-2 py-1 m-1 rounded-md cursor-pointer">{label}</button>
})

function NewTabModal({ onAddTab }) {
  const [formData, setFormData] = useState({
    label: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddTab(formData)
    setFormData({
      label: "",
      content: ""
    });
  }

  return <form onSubmit={handleSubmit} className="bg-gray-200 p-5 flex flex-col w-[400px] gap-2 rounded-md">
    <label htmlFor="label">Tab Name</label>
    <input type="text" name="label" className="bg-white rounded-sm px-2 py-1 focus:outline-none" value={formData.label} onChange={handleChange} required={true} />
    <label htmlFor="content">Tab Content</label>
    <textarea name="content" id="content" className="bg-white rounded-sm px-2 py-1 focus:outline-none" value={formData.content} onChange={handleChange} required={true}></textarea>
    <button className="bg-blue-600 px-2 py-1 m-1 rounded-md cursor-pointer text-white" type="submit">Add</button>
  </form>
}

export default App
