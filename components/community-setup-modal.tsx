'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button_modal"
import { InputModal } from "@/components/ui/input_modal"
import { Label } from "@/components/ui/label_modal"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertCircle } from 'lucide-react'

export function CommunitySetupModal() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState<File | null>(null)
  const [rules, setRules] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) newErrors.name = 'Community name is required'
    if (!description.trim()) newErrors.description = 'Community description is required'
    if (!icon) newErrors.icon = 'Community icon is required'
    if (!rules.trim()) newErrors.rules = 'Community rules are required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Here you would typically send the data to your backend
    console.log({ name, description, icon, rules })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Community</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新しいコミュニティを作成</DialogTitle>
          <DialogDescription>
            新しいコミュニティを作成します。必要な情報を設定してください
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                タイトル
              </Label>
              <InputModal
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
              {errors.name && (
                <p className="col-span-3 col-start-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                説明
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
              {errors.description && (
                <p className="col-span-3 col-start-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.description}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="icon" className="text-right">
                アイコン
              </Label>
              <InputModal
                id="icon"
                type="file"
                onChange={(e) => setIcon(e.target.files?.[0] || null)}
                className="col-span-3"
              />
              {errors.icon && (
                <p className="col-span-3 col-start-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.icon}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rules" className="text-right">
                ルール
              </Label>
              <Textarea
                id="rules"
                value={rules}
                onChange={(e) => setRules(e.target.value)}
                className="col-span-3"
                placeholder="守ってほしいルールを入力してね"
              />
              {errors.rules && (
                <p className="col-span-3 col-start-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.rules}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Community</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}