<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleManager
{

    private function isRoleExist($role_name): bool
    {
        return DB::table('roles')->where('name', $role_name)->count() > 0;
    }

    private function isPermissionExist($pem_name): bool
    {
        return DB::table('permissions')->where('name', $pem_name)->count() > 0;
    }

    public function createRole()
    {

        if (!$this->isPermissionExist('crud user')) {
            Permission::create(['name' => 'crud user']);
        }


        if (!$this->isPermissionExist('crud admin')) {
            Permission::create(['name' => 'crud admin']);
        }

        if (!$this->isPermissionExist('write card')) {
            Permission::create(['name' => 'write card']);
        }

        if (!$this->isRoleExist('owner')) {
            $role = new Role();
            $role->name = "owner";
            $role->save();
            $role->syncPermissions(['crud user', 'crud admin']);
        }

        if (!$this->isRoleExist('admin')) {
            $role = new Role();
            $role->name = "admin";
            $role->save();
            $role->givePermissionTo('crud user');
        }

        if (!$this->isRoleExist('user')) {
            $role = new Role();
            $role->name = "user";
            $role->save();
        }
    }
}
