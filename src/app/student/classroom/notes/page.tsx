'use client';
import { useState } from 'react';
import { Plus, ChevronDown, Pencil, Trash2 } from 'lucide-react';
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
    {
      id: '2',
      module: '5: Data Collection Methods',
      lesson: '1. Introduction to Data Collection',
      content: 'The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.\n\n• Evolution of research technologies\n• Tools for literature review and data analysis\n• Digital research collaboration platforms\n• Innovations in scientific publishing\n• Ethics and integrity in tech-assisted research',
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
    
    // Apply filter
    if (filterBy === 'Current Lecture') {
      filtered = filtered.filter(note => note.module === '7: Data Analysis & Visualization');
    }
    
    // Apply sort
    if (sortBy === 'Sort by Module') {
      filtered.sort((a, b) => a.module.localeCompare(b.module));
    } else if (sortBy === 'Sort by Date') {
      filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }
    
    return filtered;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Content */}
      <div className="flex-1">
        {editingNote ? (
          /* Edit Mode */
          <div className="space-y-4">
            <div className="border border-[#800080] rounded-lg p-4">
              <h3 className="font-semibold text-lg border-b border-gray-200 pb-3 mb-4">
                Lesson1: Introduction to Data Analysis
              </h3>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent"
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

            {/* Filter Controls */}
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
                        setSortBy('Sort by Date');
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
          /* Normal Mode */
          <div className="space-y-6">
            {/* Create New Note */}
            <div className="border border-gray-300 rounded-lg">
              <div className="flex items-center p-3">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Create a new note"
                  className="flex-1 resize-none focus:outline-none text-sm"
                  rows={1}
                />
                <button
                  onClick={handleCreateNote}
                  className="ml-3 w-6 h-6 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
                >
                  <Plus size={14} className="text-white" />
                </button>
              </div>
            </div>

            {/* Filter Controls */}
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

            {/* Notes List */}
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
