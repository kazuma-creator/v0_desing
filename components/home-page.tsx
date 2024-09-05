'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Home, Search, Users, PlusCircle, Bell, Settings } from "lucide-react"
import {InputModal} from '@/components/ui/input_modal'
import { CommunitySetupModal } from './community-setup-modal'



export function HomePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [communityName,setCommunityName] = useState('');
  const [communityDescription,setCommunityDescription] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () =>{
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img
              alt="Logo"
              className="h-8 w-8"
              src="/placeholder.svg?height=32&width=32"
            />
            <span className="font-semibold text-lg">推し活</span>
          </div>
          <div className="flex items-center space-x-4">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="w-full bg-gray-100 pl-8 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                placeholder="Search communities..."
                type="search"
              />
            </form>
            <CommunitySetupModal />
            <Avatar className="h-8 w-8 border-2 border-white shadow-md">
              <AvatarImage alt="User" src="/placeholder.svg?height=32&width=32" />
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className={`bg-gradient-to-b from-gray-100 to-white transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'} p-4`}>
          <nav className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              {isSidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              {!isSidebarCollapsed && <span className="ml-2">Collapse</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="h-4 w-4" />
              {!isSidebarCollapsed && <span className="ml-2">Home</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="h-4 w-4" />
              {!isSidebarCollapsed && <span className="ml-2">My Communities</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="h-4 w-4" />
              {!isSidebarCollapsed && <span className="ml-2">Notifications</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4" />
              {!isSidebarCollapsed && <span className="ml-2">Settings</span>}
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Communities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6,7].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <img
                      alt={`Community ${i}`}
                      className="rounded-lg object-cover w-16 h-16 mr-4"
                      height="64"
                      src={`/placeholder.svg?height=64&width=64&text=C${i}`}
                      width="64"
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Community {i}</h3>
                      <p className="text-sm text-gray-600">A community for enthusiasts of topic {i}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
      <footer className="border-t py-4 bg-white">
        <div className="container flex justify-between items-center px-4">
          <p className="text-sm text-gray-600">© 2023 Community App. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>

      {/* モーダル追加*/}

    </div>
  )
}