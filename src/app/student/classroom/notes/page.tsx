'use client';
import { useState, useEffect } from 'react';
import { Plus, ChevronDown, Pencil, Trash2, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Note {
  id: string;
  module: string;
  lesson: string;
  content: string;
  timestamp: Date;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      module: '7: Data Analysis & Visualization',
      lesson: '1. Introduction to Data Analysis',
      content: 'The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.',
      timestamp: new Date(),
    },
  ]);

  const [newNote, setNewNote] = useState('');
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [filterBy, setFilterBy] = useState('Current Lecture');
  const [sortBy, setSortBy] = useState('Sort by Module');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCreateNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        module: '7: Data Analysis & Visualization',
        lesson: '1. Introduction to Data Analysis',
        content: newNote,
        timestamp: new Date(),
      };
      setNotes([note, ...notes]);
      setNewNote('');
      setShowCreateNote(false);
      setIsNoteExpanded(false);
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note.id);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (editingNote) {
      setNotes(notes.map(note => 
        note.id === editingNote 
          ? { ...note, content: editContent } 
          : note
      ));
      setEditingNote(null);
      setEditContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setEditContent('');
  };

  const handleDeleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const filteredAndSortedNotes = () => {
    let filtered = [...notes];
    
    if (filterBy === 'Current Lecture') {
      filtered = filtered.filter(note => note.module === '7: Data Analysis & Visualization');
    }
    
    if (sortBy === 'Sort by Module') {
      filtered.sort((a, b) => a.module.localeCompare(b.module));
    } else if (sortBy === 'Sort by Date') {
      filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }
    
    return filtered;
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="h-full bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200">
          <Link href="/student/classroom" onClick={() => localStorage.removeItem('lastClassroomTab')} className="flex items-center space-x-2 text-gray-600 mb-4">
            <ArrowLeft size={20} />
            <span>More</span>
          </Link>
        </div>
        {/* Mobile Notes Interface */}
        {showCreateNote ? (
          // Mobile Create Note Interface
          <div className="bg-white h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <button onClick={() => setShowCreateNote(false)}>
                <X size={20} />
              </button>
              <span className="font-medium">Notes</span>
              <div></div>
            </div>
            
            <div className="p-4 flex-1">
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Current Lecture</p>
                <p className="text-xs text-gray-600 mb-1">Sort by Module</p>
              </div>
              
              <div className="bg-white rounded-lg border border-[#800080] p-4 mb-4">
                <h3 className="font-medium text-sm mb-3">
                  Lesson1: Introduction to Data Analysis
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.
                </p>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="w-full h-32 p-3 text-sm border border-gray-200 rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#800080] focus:border-transparent"
                  placeholder="qwertyuiop
asdfghjkl
zxcvbnm"
                />
              </div>
              
              <div className="flex justify-between space-x-3">
                <button
                  onClick={() => setShowCreateNote(false)}
                  className="flex-1 py-3 border border-[#800080] text-[#800080] rounded text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateNote}
                  className="flex-1 py-3 bg-[#800080] text-white rounded text-sm font-medium"
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Mobile Notes List
          <div className="h-full flex flex-col">
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium">Current Lecture</p>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">Sort by Module</p>
                <ChevronDown size={16} />
              </div>
            </div>
            
            <div className="flex-1 p-4">
              {filteredAndSortedNotes().length > 0 ? (
                <div className="space-y-4">
                  {filteredAndSortedNotes().map((note) => (
                    <div key={note.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sm">{note.module}</h3>
                          <div className="flex items-center space-x-2">
                            <button onClick={() => handleEditNote(note)}>
                              <Pencil size={14} className="text-gray-400" />
                            </button>
                            <button onClick={() => handleDeleteNote(note.id)}>
                              <Trash2 size={14} className="text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{note.lesson}</p>
                        <p className="text-sm text-gray-700">{note.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm mb-4">
                    Tap the &quot;+&quot; button to make your first note.
                  </p>
                </div>
              )}
            </div>
            
            {/* Floating Add Button */}
            <button
              onClick={() => setShowCreateNote(true)}
              className="fixed bottom-6 right-6 w-14 h-14 bg-[#800080] rounded-full flex items-center justify-center shadow-lg"
            >
              <Plus size={24} className="text-white" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        {editingNote ? (
          <div className="space-y-4">
            <div className="border border-[#800080] rounded-lg p-4">
              <h3 className="font-semibold text-lg border-b border-[#800080] pb-3 mb-4">
                Lesson1: Introduction to Data Analysis
              </h3>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-[#800080] focus:border-transparent"
                placeholder="Edit your note..."
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm font-medium hover:bg-[#FBF2FF]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-[#800080] text-white rounded text-sm font-medium hover:bg-[#660066]"
              >
                Save Note
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm"
                >
                  <span>{filterBy}</span>
                  <ChevronDown size={16} />
                </button>
                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                      onClick={() => {
                        setFilterBy('Current Lecture');
                        setShowFilterDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Current Lecture
                    </button>
                    <button
                      onClick={() => {
                        setFilterBy('All Lectures');
                        setShowFilterDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      All Lectures
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm"
                >
                  <span>{sortBy}</span>
                  <ChevronDown size={16} />
                </button>
                {showSortDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSortBy('Sort by Module');
                        setShowSortDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Sort by Module
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('Sort by Date Posted');
                        setShowSortDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Sort by Date Posted
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Enhanced Create New Note Section */}
            <div className="border border-[#800080] rounded-lg">
              <div className="transition-all duration-300">
                {isNoteExpanded ? (
                  <div className="p-4">
                    <h3 className="font-semibold text-base mb-3 border-b border-[#800080] pb-2">
                      Lesson1: Introduction to Data Analysis
                    </h3>
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Create a new note"
                      className="w-full h-24 p-3 border border-gray-200 rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#800080] focus:border-transparent text-sm"
                      rows={5}
                    />
                    
                  </div>
                ) : (
                  <div className="flex items-center p-3">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      onFocus={() => setIsNoteExpanded(true)}
                      placeholder="Create a new note"
                      className="flex-1 resize-none focus:outline-none text-sm bg-transparent"
                      rows={1}
                    />
                    <button
                      onClick={() => setIsNoteExpanded(true)}
                      className="ml-3 w-6 h-6 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
                    >
                      <Plus size={14} className="text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {isNoteExpanded && (
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsNoteExpanded(false);
                    setNewNote('');
                  }}
                  className="px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm font-medium hover:bg-[#FBF2FF]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateNote}
                  className="px-4 py-2 bg-[#800080] text-white rounded text-sm font-medium hover:bg-[#660066]"
                >
                  Save Note
                </button>
              </div>
            )}

            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm"
                >
                  <span>{filterBy}</span>
                  <ChevronDown size={16} />
                </button>
                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                      onClick={() => {
                        setFilterBy('Current Lecture');
                        setShowFilterDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Current Lecture
                    </button>
                    <button
                      onClick={() => {
                        setFilterBy('All Lectures');
                        setShowFilterDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      All Lectures
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-[#800080] text-[#800080] rounded text-sm"
                >
                  <span>{sortBy}</span>
                  <ChevronDown size={16} />
                </button>
                {showSortDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSortBy('Sort by Module');
                        setShowSortDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Sort by Module
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('Sort by Date Posted');
                        setShowSortDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Sort by Date Posted
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {filteredAndSortedNotes().length > 0 ? (
                filteredAndSortedNotes().map((note) => (
                  <div key={note.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-white px-4 py-3 flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="font-semibold text-sm">{note.module}</h3>
                        <span className="text-sm text-gray-600">{note.lesson}</span>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <button 
                          onClick={() => handleEditNote(note)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Pencil size={14} className="text-gray-500" />
                        </button>
                        <button 
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Trash2 size={14} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#1E1E1E]">
                    Click the &quot;Create a new note&quot; box or the &quot;+&quot; button to make your first note.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}