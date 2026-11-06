'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Lütfen tüm alanları doldurun.' }
  }

  // 1. Kullanıcıyı e-posta ile bul
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return { error: 'Bu e-posta ile kayıtlı kullanıcı bulunamadı.' }
  }

  // 2. Şifreyi doğrula
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return { error: 'Hatalı şifre.' }
  }

  // 3. Role göre yönlendirme yap
  if (user.role === 'ADMIN') {
    redirect('/admin') // Web Admin Paneli
  } else if (user.role === 'PROVIDER') {
    redirect('/providerprofile') // Hizmet Veren Profili
  } else {
    redirect('/profile') // Standart Kullanıcı Profili
  }
}