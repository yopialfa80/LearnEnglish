<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use \App\Models\User as M_UserModel;
use Exception;

class UserController extends Controller
{
    public function login(Request $request)
		{
		  
		    // $request->validate([
				// 'email'       => 'required|string|email',
				// 'password'    => 'required|string',
				// 'remember_me' => 'boolean'
			// ]);

			// $credentials = request(['email', 'password']);

			// if(!Auth::attempt($credentials))
				// return response()->json([
					// 'message' => 'Unauthorized'
				// ], 401);
			
			
		  try {
			
			$request->validate([
			  'email' => 'email|required',
			  'password' => 'required'
			]);
			
			$credentials = request(['email', 'password']);
			// if (!Auth::attempt($credentials)) {
			//   return response()->json([
			// 	'status_code' => 500,
			// 	'message' => 'Unauthorized'
			//   ]);
			// }
			
			$user = M_UserModel::where('email', $request->email)->first();
			// if ( ! Hash::check($request->password, $user->password, [])) {
			//    throw new \Exception('Error in Login');
			// }
			$tokenResult = $user->createToken('authToken')->plainTextToken;
			return response()->json([
			  'status_code' => 200,
			  'access_token' => $tokenResult,
			  'token_type' => 'Bearer',
			]);
		  } catch (Exception $error) {
			return response()->json([
			  'status_code' => 500,
			  'message' => 'Error in Login',
			  'error' => $error,
			]);
		  }
		  
		}
}
