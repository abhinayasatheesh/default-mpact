import React, { useState } from 'react';
import { Bell, Lock, Mail, Globe, CreditCard, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function Settings() {
  const [settings, setSettings] = useState({
    storeName: 'My E-Commerce Store',
    storeEmail: 'admin@store.com',
    storePhone: '+1 (555) 123-4567',
    storeAddress: '',
    currency: 'USD',
    timezone: 'America/New_York',
    language: 'en',
    emailNotifications: true,
    orderNotifications: true,
    promotionalEmails: false,
    twoFactorAuth: false,
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl space-y-6">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">Store Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  value={settings.storeName}
                  onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                  placeholder="Enter store name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="storeEmail">Email</Label>
                  <Input
                    id="storeEmail"
                    type="email"
                    value={settings.storeEmail}
                    onChange={(e) => setSettings({ ...settings, storeEmail: e.target.value })}
                    placeholder="store@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="storePhone">Phone</Label>
                  <Input
                    id="storePhone"
                    type="tel"
                    value={settings.storePhone}
                    onChange={(e) => setSettings({ ...settings, storePhone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="storeAddress">Store Address</Label>
                <Textarea
                  id="storeAddress"
                  value={settings.storeAddress}
                  onChange={(e) => setSettings({ ...settings, storeAddress: e.target.value })}
                  placeholder="Enter your store address"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={settings.currency} onValueChange={(value) => setSettings({ ...settings, currency: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={settings.timezone} onValueChange={(value) => setSettings({ ...settings, timezone: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="language">Language</Label>
                <Select value={settings.language} onValueChange={(value) => setSettings({ ...settings, language: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Save size={18} className="mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Receive email notifications for important updates
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                />
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Order Notifications</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Get notified when new orders are placed
                  </p>
                </div>
                <Switch
                  checked={settings.orderNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, orderNotifications: checked })}
                />
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Promotional Emails</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Receive tips, tricks, and promotional content
                  </p>
                </div>
                <Switch
                  checked={settings.promotionalEmails}
                  onCheckedChange={(checked) => setSettings({ ...settings, promotionalEmails: checked })}
                />
              </div>

              <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Save size={18} className="mr-2" />
                Save Preferences
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
                />
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" placeholder="Enter current password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="Enter new password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Update Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
            </div>

            <div className="space-y-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2026</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Primary
                  </span>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      MC
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 8888</p>
                      <p className="text-sm text-gray-500">Expires 08/2027</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                + Add New Payment Method
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
