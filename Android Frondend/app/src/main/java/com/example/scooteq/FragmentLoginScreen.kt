package com.example.scooteq

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.example.scooteq.databinding.LoginScreenFragmentBinding

class FragmentLoginScreen : Fragment() {
    private lateinit var binding: LoginScreenFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = LoginScreenFragmentBinding.inflate(inflater, container, false)
        val view: View = binding.root

        binding.btnNext.setOnClickListener {
            findNavController().navigate(R.id.action_fragmentLoginScreen_to_fragmentMainScreen)
        }

        binding.tvNoAccount.setOnClickListener {
            findNavController().navigate(R.id.action_fragmentLoginScreen_to_fragmentRegister)
        }

        return view
    }
}

